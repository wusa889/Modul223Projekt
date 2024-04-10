ALTER TABLE "comments" DROP CONSTRAINT "comments_fkCreatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "comments" DROP CONSTRAINT "comments_fkUpdatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "likes" DROP CONSTRAINT "likes_fkCreatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "likes" DROP CONSTRAINT "likes_fkUpdatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_fkCreatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_fkUpdatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "posts_fkCreatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "posts_fkUpdatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_fkCreatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_fkUpdatedBy_users_id_fk";
--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN IF EXISTS "updatedAt";--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN IF EXISTS "fkCreatedBy";--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN IF EXISTS "fkUpdatedBy";--> statement-breakpoint
ALTER TABLE "likes" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "likes" DROP COLUMN IF EXISTS "updatedAt";--> statement-breakpoint
ALTER TABLE "likes" DROP COLUMN IF EXISTS "fkCreatedBy";--> statement-breakpoint
ALTER TABLE "likes" DROP COLUMN IF EXISTS "fkUpdatedBy";--> statement-breakpoint
ALTER TABLE "notifications" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "notifications" DROP COLUMN IF EXISTS "updatedAt";--> statement-breakpoint
ALTER TABLE "notifications" DROP COLUMN IF EXISTS "fkCreatedBy";--> statement-breakpoint
ALTER TABLE "notifications" DROP COLUMN IF EXISTS "fkUpdatedBy";--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "updatedAt";--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "fkCreatedBy";--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "fkUpdatedBy";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "updatedAt";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "fkCreatedBy";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "fkUpdatedBy";