# Dockerfile
# ใช้ Node.js เวอร์ชันล่าสุดเป็น base image
FROM node:20-alpine

# ตั้งค่า working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install


# คัดลอกโค้ดทั้งหมดไปยัง container
COPY . .

# สร้าง build สำหรับโปรเจค Next.js
RUN npm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# รันโปรเจค
CMD ["npm", "run", "start"]
