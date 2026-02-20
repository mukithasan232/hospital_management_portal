import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const hashedPassword = await bcrypt.hash('password123', 10)

    // Create Admin
    const admin = await prisma.user.upsert({
        where: { email: 'admin@medos.com' },
        update: {},
        create: {
            email: 'admin@medos.com',
            name: 'System Admin',
            password: hashedPassword,
            role: 'ADMIN',
        },
    })

    // Create Doctor
    const doctorUser = await prisma.user.upsert({
        where: { email: 'doctor@medos.com' },
        update: {},
        create: {
            email: 'doctor@medos.com',
            name: 'Dr. Sarah Wilson',
            password: hashedPassword,
            role: 'DOCTOR',
            doctor: {
                create: {
                    specialization: 'Cardiology',
                    experience: 12,
                    bio: 'Expert in cardiovascular health and surgery.',
                    consultationFee: 150,
                    availability: JSON.stringify({
                        monday: ['09:00', '17:00'],
                        wednesday: ['09:00', '17:00'],
                        friday: ['09:00', '14:00']
                    })
                }
            }
        },
    })

    // Create Patient
    const patientUser = await prisma.user.upsert({
        where: { email: 'patient@medos.com' },
        update: {},
        create: {
            email: 'patient@medos.com',
            name: 'John Doe',
            password: hashedPassword,
            role: 'PATIENT',
            patient: {
                create: {
                    gender: 'Male',
                    bloodGroup: 'O+',
                    address: '123 Health St, Medical City',
                    medicalHistory: 'No major history.'
                }
            }
        },
    })

    console.log({ admin, doctorUser, patientUser })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
