import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('5a73f279-ad9a-4880-9ad0-008a0b95348c', '1Kendra_Hansen@hotmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv44556', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', true);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('05321133-9676-413d-889e-93427a8b568a', '9Floy.Adams@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv44556', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', true);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('4468f530-3d7a-4e4c-94ba-1e5a36146ad7', '17Wallace80@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv12345', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', true);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('bc2d3aeb-fd67-4292-9372-a57a427e8a88', '25Magali.Robel84@hotmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv78901', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', true);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('9f743416-96df-4e4f-a1cc-c8fc93071558', '33Twila_Watsica86@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv44556', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('4762db8d-c64c-4563-950b-b76ba745404a', '41Vladimir.Johnston-Hintz@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv44556', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('46e5b3b3-a706-4cb2-add6-7363def19d5b', '49Diamond16@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv11223', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', true);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('9d6b6d2d-a667-4da3-98b7-df351a607a78', '65Alanis96@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv44556', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "isAdmin") VALUES ('e6744bb7-c505-4052-a847-56916465326c', '73Keyon_Flatley40@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('5f12fe00-4bdf-49f4-9487-ce3258c5d4a2', 'RankBoosters', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('2b76adc9-76dc-495e-9b5e-7928b4fcc711', 'WebRank Pro', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('3bbc5c81-10d2-4149-b16a-3ce39817f37a', 'SEO Masters', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('75d0a812-847c-401a-a7dc-e046c6eb00c1', 'SearchGenius', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9bfa7dc5-93e1-4b98-a9cf-019d3eff4787', 'OptimizeNow', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b719862d-ff4f-4b1f-8b03-9b9541cab2c1', 'SEO Masters', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('de453ae3-8436-49bc-825f-e6b55cc526ff', 'SearchGenius', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('dcf0734f-538f-48ef-8073-922ded2615be', 'SEO Masters', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('521e6988-d7d4-41c8-9d4e-869abcfd81ba', 'WebRank Pro', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8f270695-063c-4511-b1f7-8bf7962e598b', 'SEO Masters', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c8193a95-8f04-4df7-8a9f-d7dc98c11924', 'Administrator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '8f270695-063c-4511-b1f7-8bf7962e598b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('b93c189f-876a-44f4-8707-f9463d647fb2', 'Editor', '4468f530-3d7a-4e4c-94ba-1e5a36146ad7', 'b719862d-ff4f-4b1f-8b03-9b9541cab2c1');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7f5bbe12-c84f-4047-9d0c-ef4f8dcd8230', 'Subscriber', '46e5b3b3-a706-4cb2-add6-7363def19d5b', 'b719862d-ff4f-4b1f-8b03-9b9541cab2c1');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('50575180-c302-49b9-a793-e495c0a54dc2', 'Administrator', '9d6b6d2d-a667-4da3-98b7-df351a607a78', '8f270695-063c-4511-b1f7-8bf7962e598b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c48a910c-ca6a-4b1b-a9f2-7b00ab65388e', 'Manager', 'e6744bb7-c505-4052-a847-56916465326c', '5f12fe00-4bdf-49f4-9487-ce3258c5d4a2');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8fa09531-662e-4fdb-a8b3-71625dec0aa7', 'Administrator', '9f743416-96df-4e4f-a1cc-c8fc93071558', '8f270695-063c-4511-b1f7-8bf7962e598b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('eccea4d2-21f1-4270-9974-726377668cd4', 'Contributor', 'bc2d3aeb-fd67-4292-9372-a57a427e8a88', 'dcf0734f-538f-48ef-8073-922ded2615be');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('55301022-4030-4d3d-bffe-218e1b4deb1f', 'Editor', '05321133-9676-413d-889e-93427a8b568a', '75d0a812-847c-401a-a7dc-e046c6eb00c1');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f8e76302-86c6-4189-b323-c9d924514efb', 'Subscriber', '4468f530-3d7a-4e4c-94ba-1e5a36146ad7', '9bfa7dc5-93e1-4b98-a9cf-019d3eff4787');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('997ec795-ac64-45ba-b2dd-4bfca85da181', 'Administrator', 'e6744bb7-c505-4052-a847-56916465326c', '5f12fe00-4bdf-49f4-9487-ce3258c5d4a2');

INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('efa89705-791e-4c65-b782-af41afd2f6a8', 'Backlink Checker', 'Analyze and discover the best keywords for your website.', 'ranktracking');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('2e7a0009-c5f1-46da-8d57-a2031a88ad1b', 'Rank Tracking', 'Track your websites ranking for specific keywords over time.', 'backlinkchecker');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('b0aa4b3a-644b-4854-a960-f60d4981d80a', 'Website Audit', 'Track your websites ranking for specific keywords over time.', 'ranktracking');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('c00105ce-0de5-4a0c-984c-0553a08d087b', 'Backlink Checker', 'Perform a comprehensive audit of your website for SEO improvements.', 'backlinkchecker');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('df1dd12b-e9e8-466f-8674-41fcb64c338d', 'Meta Tag Generator', 'Generate meta tags for your website to improve SEO.', 'keywordresearch');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('53e0200e-d1f9-4746-8b94-301fd1f3cc10', 'Backlink Checker', 'Analyze and discover the best keywords for your website.', 'metataggenerator');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('15206104-16d1-4753-ba26-42b43541c6d4', 'Keyword Research', 'Generate meta tags for your website to improve SEO.', 'ranktracking');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('26f3f587-913d-48d8-b5a1-7b78d22958c3', 'Backlink Checker', 'Track your websites ranking for specific keywords over time.', 'backlinkchecker');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('ad8935fd-8ffb-40a9-8fde-2f07109fafb0', 'Keyword Research', 'Perform a comprehensive audit of your website for SEO improvements.', 'websiteaudit');
INSERT INTO "Tool" ("id", "name", "description", "route") VALUES ('6f93a579-513e-4b85-8c4a-afbcf6e04a58', 'Meta Tag Generator', 'Analyze and discover the best keywords for your website.', 'websiteaudit');

INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('8e3eefa2-b05a-445e-940a-34ef64363948', '2024-12-21T12:48:02.521Z', 'keyword best practices language en', 'rank 1 traffic 1200', '5a73f279-ad9a-4880-9ad0-008a0b95348c', 'df1dd12b-e9e8-466f-8674-41fcb64c338d');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('f323ec4b-60c5-4e1b-997c-c24842dad782', '2023-12-27T10:51:56.497Z', 'keyword best practices language en', 'rank 3 impressions 500', '4762db8d-c64c-4563-950b-b76ba745404a', 'df1dd12b-e9e8-466f-8674-41fcb64c338d');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('44298113-515a-4f26-a378-12626ad5cff1', '2025-05-17T04:10:43.959Z', 'meta title description sample description', 'rank 1 traffic 1200', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '2e7a0009-c5f1-46da-8d57-a2031a88ad1b');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('cd54de63-9d2e-4952-bfe6-5f58d51d4f4a', '2024-06-25T21:42:26.119Z', 'keyword best practices language en', 'rank 3 impressions 500', 'e6744bb7-c505-4052-a847-56916465326c', 'df1dd12b-e9e8-466f-8674-41fcb64c338d');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('70ac71cb-b2d0-4e1f-9d6e-05f9f309557d', '2024-05-07T13:20:20.431Z', 'keyword SEO tips location USA', 'score 85 issues missing alt tags slow loading', '46e5b3b3-a706-4cb2-add6-7363def19d5b', '6f93a579-513e-4b85-8c4a-afbcf6e04a58');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('3ce77ad7-e940-4c58-bcb6-5bdf9b950368', '2023-11-08T15:40:28.392Z', 'meta title description sample description', 'metaTags title Optimized Title description Optimized Description', '9d6b6d2d-a667-4da3-98b7-df351a607a78', '26f3f587-913d-48d8-b5a1-7b78d22958c3');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('1662e322-fd70-48d5-8033-a3e3e2a9c843', '2025-04-01T02:56:03.534Z', 'url httpsexample.com depth 3', 'metaTags title Optimized Title description Optimized Description', '4468f530-3d7a-4e4c-94ba-1e5a36146ad7', 'df1dd12b-e9e8-466f-8674-41fcb64c338d');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('5aa830be-6fc9-4ac0-a40b-db77f42a9318', '2025-04-30T15:38:58.714Z', 'meta title description sample description', 'score 85 issues missing alt tags slow loading', '9f743416-96df-4e4f-a1cc-c8fc93071558', 'b0aa4b3a-644b-4854-a960-f60d4981d80a');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('4471ac8d-c991-433b-ab29-c88d7f399068', '2024-09-05T06:56:23.188Z', 'url httpsexample.com depth 3', 'metaTags title Optimized Title description Optimized Description', 'e6744bb7-c505-4052-a847-56916465326c', 'df1dd12b-e9e8-466f-8674-41fcb64c338d');
INSERT INTO "UserToolUsage" ("id", "usageTimestamp", "parameters", "results", "userId", "toolId") VALUES ('8ed51269-1d92-4441-bc58-428a74ae3afe', '2025-08-23T00:25:53.134Z', 'keyword SEO tips location USA', 'rank 1 traffic 1200', 'e6744bb7-c505-4052-a847-56916465326c', 'c00105ce-0de5-4a0c-984c-0553a08d087b');

INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('11163af0-0578-4447-9caa-7908fc13b950', 'Enterprise', '2023-09-20T18:24:40.378Z', '2024-08-11T15:03:25.059Z', '5a73f279-ad9a-4880-9ad0-008a0b95348c', '521e6988-d7d4-41c8-9d4e-869abcfd81ba');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('c8597b0c-b917-43d7-a929-c2b65c8491e9', 'Basic', '2024-08-11T19:33:26.023Z', '2024-07-28T11:17:47.749Z', '4468f530-3d7a-4e4c-94ba-1e5a36146ad7', 'de453ae3-8436-49bc-825f-e6b55cc526ff');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('51144c9d-28bb-4041-b0db-fa691a57bbc4', 'Pro', '2024-11-07T20:02:16.408Z', '2024-04-13T17:58:57.932Z', '05321133-9676-413d-889e-93427a8b568a', '5f12fe00-4bdf-49f4-9487-ce3258c5d4a2');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('4239b6f0-dca3-45e7-a87c-b1c0b14227fc', 'Free', '2024-04-30T09:42:31.813Z', '2024-10-09T06:27:10.909Z', '9f743416-96df-4e4f-a1cc-c8fc93071558', '2b76adc9-76dc-495e-9b5e-7928b4fcc711');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('a2e01bcf-4c1b-420d-971b-8fdbdbaa27bf', 'Premium', '2024-09-20T15:16:00.009Z', '2025-07-05T20:11:18.001Z', '5a73f279-ad9a-4880-9ad0-008a0b95348c', 'de453ae3-8436-49bc-825f-e6b55cc526ff');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('38ddece1-0a04-4f3c-91cf-361f73c70802', 'Free', '2025-06-26T13:53:22.418Z', '2024-06-18T09:02:04.479Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'de453ae3-8436-49bc-825f-e6b55cc526ff');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('e93b9a17-fc71-4837-8f26-f7a3df8ab4a4', 'Enterprise', '2024-11-30T17:08:06.327Z', '2025-04-22T05:25:32.284Z', '05321133-9676-413d-889e-93427a8b568a', '3bbc5c81-10d2-4149-b16a-3ce39817f37a');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('78d41ab1-7730-46dc-873f-28e2b941d273', 'Premium', '2025-05-12T06:54:35.105Z', '2023-10-15T15:54:24.948Z', '4468f530-3d7a-4e4c-94ba-1e5a36146ad7', '75d0a812-847c-401a-a7dc-e046c6eb00c1');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('55254ec7-87e0-4e64-8d0f-7601fa8453e9', 'Pro', '2025-04-27T17:57:08.546Z', '2024-09-17T09:35:36.590Z', '46e5b3b3-a706-4cb2-add6-7363def19d5b', '9bfa7dc5-93e1-4b98-a9cf-019d3eff4787');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId", "organizationId") VALUES ('853fc2c9-2920-429b-ad9f-403ffb1fe528', 'Basic', '2025-04-27T02:49:52.781Z', '2025-08-14T09:05:03.636Z', '4762db8d-c64c-4563-950b-b76ba745404a', 'de453ae3-8436-49bc-825f-e6b55cc526ff');

INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('87ea16f8-122e-4ae3-87e0-95d5074c5042', 981, 'Great tool very useful', '4468f530-3d7a-4e4c-94ba-1e5a36146ad7', 'b0aa4b3a-644b-4854-a960-f60d4981d80a');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('a32d4926-9e7c-4277-a661-f81163494b71', 126, 'Excellent features highly recommend', '46e5b3b3-a706-4cb2-add6-7363def19d5b', '26f3f587-913d-48d8-b5a1-7b78d22958c3');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('38f22f88-40a4-45a1-803e-4bd2ed1207fb', 908, 'Not what I expected could be better.', '4468f530-3d7a-4e4c-94ba-1e5a36146ad7', '6f93a579-513e-4b85-8c4a-afbcf6e04a58');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('05c2bcae-8c2e-481f-862d-2f9617146792', 209, 'I found it very easy to use.', '05321133-9676-413d-889e-93427a8b568a', 'efa89705-791e-4c65-b782-af41afd2f6a8');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('8d140d88-6840-4803-ab05-5c6b7a3fc758', 630, 'Needs some improvements but overall good.', 'e6744bb7-c505-4052-a847-56916465326c', '15206104-16d1-4753-ba26-42b43541c6d4');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('5fcbc5ea-79a6-4210-b9c9-077dfc04f368', 193, 'Excellent features highly recommend', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b0aa4b3a-644b-4854-a960-f60d4981d80a');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('aded75c5-a073-4c6b-8bfa-062bc81f3f80', 939, 'Not what I expected could be better.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'df1dd12b-e9e8-466f-8674-41fcb64c338d');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('39c3497c-5397-4e70-9786-4a3eb0761e32', 745, 'Not what I expected could be better.', '46e5b3b3-a706-4cb2-add6-7363def19d5b', 'df1dd12b-e9e8-466f-8674-41fcb64c338d');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('ed48e344-9dc9-40b4-b64b-1ea471458c3f', 248, 'Not what I expected could be better.', '4762db8d-c64c-4563-950b-b76ba745404a', 'ad8935fd-8ffb-40a9-8fde-2f07109fafb0');
INSERT INTO "Feedback" ("id", "rating", "comments", "userId", "toolId") VALUES ('574fda9b-9533-43b6-93aa-ecdc1ac02830', 679, 'Not what I expected could be better.', 'bc2d3aeb-fd67-4292-9372-a57a427e8a88', 'efa89705-791e-4c65-b782-af41afd2f6a8');

INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('1d20f000-e5c1-475e-bab9-1576e45fd18f', 'form_submission', '2023-12-25T09:35:09.663Z', 'bc2d3aeb-fd67-4292-9372-a57a427e8a88', '15206104-16d1-4753-ba26-42b43541c6d4');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('79a7efae-e176-4d9b-85c0-9c3f6d4799b0', 'form_submission', '2025-04-06T07:16:44.216Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '53e0200e-d1f9-4746-8b94-301fd1f3cc10');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('e5d09f93-0f7a-4cf4-b471-b431fcc8d31a', 'button_click', '2024-01-04T21:55:31.994Z', '9f743416-96df-4e4f-a1cc-c8fc93071558', 'c00105ce-0de5-4a0c-984c-0553a08d087b');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('03fed3ae-39ed-422a-ab42-758b4ad52b72', 'link_click', '2025-08-23T08:01:53.642Z', '5a73f279-ad9a-4880-9ad0-008a0b95348c', 'b0aa4b3a-644b-4854-a960-f60d4981d80a');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('95b58694-ffa9-4ca7-b5df-1628c4d76e59', 'button_click', '2025-07-18T21:36:18.372Z', '5a73f279-ad9a-4880-9ad0-008a0b95348c', 'c00105ce-0de5-4a0c-984c-0553a08d087b');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('91e87524-a463-42a5-a194-f5f8a6658e0e', 'button_click', '2025-03-28T13:54:37.533Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ad8935fd-8ffb-40a9-8fde-2f07109fafb0');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('0630a7c0-3918-4da3-a0bd-e0756a286ff1', 'button_click', '2024-08-22T06:17:44.133Z', '9f743416-96df-4e4f-a1cc-c8fc93071558', 'ad8935fd-8ffb-40a9-8fde-2f07109fafb0');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('2aa6c225-1b86-4a92-83b6-9234dac258dc', 'page_view', '2023-12-19T20:18:31.256Z', '9d6b6d2d-a667-4da3-98b7-df351a607a78', '6f93a579-513e-4b85-8c4a-afbcf6e04a58');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('e20882f3-544f-438d-a36d-7a647cd40470', 'link_click', '2024-03-06T21:29:06.954Z', 'bc2d3aeb-fd67-4292-9372-a57a427e8a88', '53e0200e-d1f9-4746-8b94-301fd1f3cc10');
INSERT INTO "Analytics" ("id", "action", "timestamp", "userId", "toolId") VALUES ('f4fcc05b-32e8-4fdb-b999-58a72b74eb4c', 'form_submission', '2025-03-13T17:44:34.895Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b0aa4b3a-644b-4854-a960-f60d4981d80a');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
