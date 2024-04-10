CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" date NOT NULL,
	"updatedAt" date NOT NULL,
	"fkCreatedBy" integer NOT NULL,
	"fkUpdatedBy" integer NOT NULL,
	"content" text NOT NULL,
	"fkUser" integer NOT NULL,
	"fkPost" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" date NOT NULL,
	"updatedAt" date NOT NULL,
	"type" boolean NOT NULL,
	"fkCreatedBy" integer NOT NULL,
	"fkUpdatedBy" integer NOT NULL,
	"fkPost" integer NOT NULL,
	"fkUser" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" date NOT NULL,
	"updatedAt" date NOT NULL,
	"fkCreatedBy" integer NOT NULL,
	"fkUpdatedBy" integer NOT NULL,
	"content" text NOT NULL,
	"fkSentBy" integer NOT NULL,
	"fkSentTo" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" date NOT NULL,
	"updatedAt" date NOT NULL,
	"fkCreatedBy" integer NOT NULL,
	"fkUpdatedBy" integer NOT NULL,
	"content" text NOT NULL,
	"fkUser" integer NOT NULL,
	"fkLikes" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"createdAt" date NOT NULL,
	"updatedAt" date NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	"email" varchar NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"firstname" text NOT NULL,
	"role" integer NOT NULL,
	"isBanned" boolean NOT NULL,
	"fkCreatedBy" integer NOT NULL,
	"fkUpdatedBy" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_fkCreatedBy_users_id_fk" FOREIGN KEY ("fkCreatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_fkUpdatedBy_users_id_fk" FOREIGN KEY ("fkUpdatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_fkUser_users_id_fk" FOREIGN KEY ("fkUser") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_fkCreatedBy_users_id_fk" FOREIGN KEY ("fkCreatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_fkUpdatedBy_users_id_fk" FOREIGN KEY ("fkUpdatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_fkUser_users_id_fk" FOREIGN KEY ("fkUser") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notifications" ADD CONSTRAINT "notifications_fkCreatedBy_users_id_fk" FOREIGN KEY ("fkCreatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notifications" ADD CONSTRAINT "notifications_fkUpdatedBy_users_id_fk" FOREIGN KEY ("fkUpdatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notifications" ADD CONSTRAINT "notifications_fkSentBy_users_id_fk" FOREIGN KEY ("fkSentBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notifications" ADD CONSTRAINT "notifications_fkSentTo_users_id_fk" FOREIGN KEY ("fkSentTo") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_fkCreatedBy_users_id_fk" FOREIGN KEY ("fkCreatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_fkUpdatedBy_users_id_fk" FOREIGN KEY ("fkUpdatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_fkUser_users_id_fk" FOREIGN KEY ("fkUser") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_fkCreatedBy_users_id_fk" FOREIGN KEY ("fkCreatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_fkUpdatedBy_users_id_fk" FOREIGN KEY ("fkUpdatedBy") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
