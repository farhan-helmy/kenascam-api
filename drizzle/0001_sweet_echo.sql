CREATE TABLE `USER` (
	`id` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`refreshToken` text,
	`accessToken` text
);
