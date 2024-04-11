CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"postid" integer NOT NULL,
	"userid" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" integer NOT NULL,
	"user_id" integer NOT NULL,
	"postid" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"fkSentTo" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"userid" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	"email" varchar NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"firstname" text NOT NULL,
	"role" integer NOT NULL,
	"isBanned" boolean NOT NULL
);
