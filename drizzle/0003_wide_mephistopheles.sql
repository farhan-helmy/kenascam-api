CREATE TABLE `COMMENT` (
	`id` text PRIMARY KEY NOT NULL,
	`nickname` text NOT NULL,
	`content` text NOT NULL,
	`test` text NOT NULL,
	`scamId` text NOT NULL,
	FOREIGN KEY (`scamId`) REFERENCES `SCAM`(`id`) ON UPDATE no action ON DELETE no action
);
