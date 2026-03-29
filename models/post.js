const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    // 🔴 Basic Info
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["Job", "Admit Card", "Result", "Answer Key"],
      required: true,
    },

    organization: {
      type: String,
      required: true,
      trim: true,
    },

    // 🔵 Important Dates
    dates: {
      formStart: Date,
      lastDate: Date,
      feeLastDate: Date,
      examDate: Date,
      admitCardDate: Date,
    },

    // 🟣 Application Fees (Dynamic)
    fees: [
      {
        category: {
          type: String, // GEN / OBC / SC / ST / EWS
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],

    // 🟢 Age Limit
    ageLimit: {
      min: Number,
      max: Number,
      relaxation: String,
    },

    // 🟡 Vacancy Details (MOST IMPORTANT)
    vacancy: [
      {
        postName: {
          type: String,
          required: true,
        },
        total: {
          type: Number,
          required: true,
        },
        eligibility: {
          type: String,
        },

        // 🔥 Category-wise seats (Dynamic)
        categoryWise: [
          {
            category: {
              type: String, // GEN / OBC / SC / ST / EWS
              required: true,
            },
            seats: {
              type: Number,
              required: true,
            },
          },
        ],
      },
    ],

    // 🔗 Important Links
    links: [
      {
        title: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],

    // 📄 Required Documents
    documents: [
      {
        name: {
          type: String, // e.g. "Aadhar Card"
          required: true,
        },
        description: {
          type: String, // optional explanation
        },
      },
    ],

    // 📝 Full Description
    description: {
      type: String,
    },

    // 🏷️ Tags (for search/filter)
    tags: [
      {
        type: String,
      },
    ],

    // 🟤 Status Control
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    // 👤 Admin Reference
    createdBy: {
      type: String, // later you can change to ObjectId
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Post", postSchema);
