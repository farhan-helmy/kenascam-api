CREATE TABLE `IMAGE` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`scamId` text NOT NULL,
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `SCAM` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`isApproved` integer DEFAULT false
);
--> statement-breakpoint
CREATE TABLE `TAG` (
	`id` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`label` text NOT NULL,
	`scamId` text NOT NULL,
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE no action
);
