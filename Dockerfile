# ใช้ภาพพื้นฐาน
FROM node:20-alpine

# ตั้งค่าไดเรกทอรีทำงาน
WORKDIR /app

# คัดลอกไฟล์ package.json และ lock file
COPY package.json package-lock.json ./  

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์โค้ดทั้งหมด
COPY . .

# สร้างแอป
RUN npm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# คำสั่งรันแอป
CMD ["npm", "run", "production"]
