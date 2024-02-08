CREATE TABLE `SCAM_TO_TAGS` (
	`scamId` text NOT NULL,
	`tagId` text NOT NULL,
	PRIMARY KEY(`scamId`, `tagId`),
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tagId`) REFERENCES `TAGS`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `TAGS` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`value` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `CATEGORY`;--> statement-breakpoint
DROP TABLE `SCAM_TO_CATEGORY`;--> statement-breakpoint
CREATE UNIQUE INDEX `TAGS_name_unique` ON `TAGS` (`name`);