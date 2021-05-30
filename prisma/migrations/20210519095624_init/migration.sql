-- CreateTable
CREATE TABLE "podcasts" (
    "id" UUID NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "author" TEXT,
    "created at" DATE,
    "season" INTEGER,
    "episode" INTEGER,
    "image" TEXT,
    "audio" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "podcasts.title_unique" ON "podcasts"("title");

-- CreateIndex
CREATE UNIQUE INDEX "podcasts.episode_unique" ON "podcasts"("episode");
