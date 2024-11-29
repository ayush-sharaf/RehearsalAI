/** @type{import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://ai-mock-interview_owner:Tm5uq6bBXhZw@ep-gentle-union-a1bvb4rf.ap-southeast-1.aws.neon.tech/ai-mock-interview?sslmode=require",
    },
};