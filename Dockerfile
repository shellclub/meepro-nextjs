# ใช้ Node.js เวอร์ชันที่ต้องการเป็น base image
FROM node:20-alpine

# กำหนด working directory ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json เข้าไปใน container
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์โค้ดทั้งหมดเข้าไปใน container
COPY . .

# สร้างโปรเจกต์ (สำหรับ production)
RUN npm run build

# ระบุพอร์ตที่ container จะฟัง (ค่าปกติคือ 3000)
EXPOSE 3000

# คำสั่งเริ่มต้นเพื่อรันแอปพลิเคชัน
CMD ["npm", "start"]
