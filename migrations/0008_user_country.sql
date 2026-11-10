-- Country selected at registration. Required for email sign-up (enforced in
-- better-auth hooks.before); social (Google) sign-up leaves it NULL until the
-- user provides one.
ALTER TABLE `user` ADD COLUMN `country` text;
