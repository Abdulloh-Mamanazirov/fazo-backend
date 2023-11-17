-- CreateTable
CREATE TABLE "resume" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "telegram" UUID,

    CONSTRAINT "resume_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_telegram_fkey" FOREIGN KEY ("telegram") REFERENCES "vacancies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
