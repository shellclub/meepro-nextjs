# ใช้ Node.js เป็น base image
FROM node:18-alpine AS builder

# ตั้งค่า working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package.json package-lock.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมดไปยัง container
COPY . .

# สร้าง production build
RUN npm run build

# ใช้ base image ที่เล็กกว่าเพื่อรันแอป
FROM node:18-alpine AS runner
WORKDIR /app

# คัดลอกไฟล์ที่ build เสร็จแล้ว
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# เปิดพอร์ต 3000
EXPOSE 3000

# คำสั่งรันแอป
CMD ["npm", "start"]
