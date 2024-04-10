DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_fkPost_posts_id_fk" FOREIGN KEY ("fkPost") REFERENCES "posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_fkPost_posts_id_fk" FOREIGN KEY ("fkPost") REFERENCES "posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
