CREATE TABLE `CATEGORY` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `TAG`;--> statement-breakpoint
CREATE UNIQUE INDEX `CATEGORY_name_unique` ON `CATEGORY` (`name`);