export interface Project {
  number: string
  title: string
  type: string
  description: string
  tags: string[]
  gradient: string
  image?: string // e.g. '/images/projects/project1.jpg'
}

export interface EducationItem {
  year: string
  title: string
  school: string
  status: string
  logo?: string // e.g. '/images/education/school-logo.png'
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'RFID Student Management',
    type: 'IoT',
    description: 'A web-based student management and attendance system connecting RFID hardware with a clean dashboard.',
    tags: ['ESP8266', 'RFID', 'JavaScript'],
    gradient: 'from-cyan-400/30 via-blue-500/10 to-transparent',
    image: '/',
  },
  {
    number: '02',
    title: 'Climate Control Node',
    type: 'IoT',
    description: 'An IoT monitoring and control system for temperature, humidity, and real-time device telemetry.',
    tags: ['ESP32', 'DHT11', 'Blynk'],
    gradient: 'from-violet-400/30 via-fuchsia-500/10 to-transparent',
    image: '/',
  },
  {
    number: '03',
    title: 'Personal Portfolio',
    type: 'Web',
    description: 'A responsive, motion-rich portfolio built to turn curiosity into meaningful connections.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-emerald-400/25 via-cyan-500/10 to-transparent',
    image: '/',
  },
]

export const skills: Record<string, string[]> = {
  Programming: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  'Web Development': ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  Technology: ['IoT', 'ESP8266', 'ESP32', 'Embedded Systems'],
  Other: ['Git', 'GitHub', 'UI/UX', 'Graphic Design', 'Cybersecurity'],
}

export const educationItems: EducationItem[] = [
  {
    year: '2024—2028',
    title: 'Bachelor of Science in Computer Science',
    school: 'Sammilani Mahavidyalaya, Kolkata',
    status: 'Currently pursuing',
    logo: '/images/College.jpg',
  },
  {
    year: '2022—2024',
    title: 'Higher Secondary · PCMCS',
    school: 'Madarat Popular Academy, Baruipur',
    status: 'Completed',
    logo: '/images/School.jpg',
  },
  {
    year: '2021—2022',
    title: 'Secondary · 10th',
    school: 'Madarat Popular Academy, Baruipur',
    status: 'Completed',
    logo: '/images/School.jpg',
  },
]

export const navItems = ['About', 'Education', 'Projects', 'Skills', 'Contact']

