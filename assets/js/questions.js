//create the quiz questions
let questions = [
    {
        suite: 'A',
        question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads ?",
        reponse : "Amazon EC2 instances can be launched on demand when needed",
        options: [
            "Amazon EC2 costs are billed on a monthly basis",
            "Users retain full administrative access to their Amazon EC2 instances.",
            "Amazon EC2 instances can be launched on demand when needed",
            "Users can permanently run enough instances to handle peak workloads.",
        ]
    },

    {
        suite: 'B',
        question: "Which AWS service would simplify the migration of a database to AWS?",
        reponse : "AWS Database Migration Service (AWS DMS)",
        options: [
            "AWS Storage Gateway",
            "AWS Database Migration Service (AWS DMS)",
            "Amazon EC2",
            "Amazon AppStream 2.0",
        ]
    },

    {
        suite: 'C',
        question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
        reponse : "AWS Marketplace",
        options: [
            "AWS Config",
            "AWS OpsWorks",
            "AWS SDK",
            "AWS Marketplace",
        ]
    },

    {
        suite: 'D',
        question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
        reponse : "Amazon Virtual Private Cloud (Amazon VPC)",
        options: [
            "AWS Config",
            "Amazon Route 53",
            "AWS Direct Connect",
            "Amazon Virtual Private Cloud (Amazon VPC)",
        ]
    },

    {
        suite: 'E',
        question: "Which of the following is an AWS responsibility under the AWS shared responsibility model ?",
        reponse : "Maintaining physical hardware",
        options: [
            "Configuring third-party applications",
            "Maintaining physical hardware",
            "Securing application access and data",
            "Managing guest operating systems",
        ]
    },

    {
        suite: 'F',
        question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery ?",
        reponse : "Edge locations",
        options: [
            "AWS Regions",
            "Edge locations",
            "Availability Zones",
            "Virtual Private Cloud (VPC)",
        ]
    },

    {
        suite: 'G',
        question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console ?",
        reponse : "Enable multi-factor authentication",
        options: [
            "Use Amazon Cloud Directory",
            "Audit AWS Identity and Access Management (IAM) roles",
            "Enable multi-factor authentication",
            "Enable AWS CloudTrail",
        ]
    },

    {
        suite: 'H',
        question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated ?",
        reponse : "AWS CloudTrail",
        options: [
            "AWS Trusted Advisor",
            "AWS CloudTrail",
            "AWS X-Ray",
            "AWS Identity and Access Management (AWS IAM)",
        ]
    },

    {
        suite: 'I',
        question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment ?",
        reponse : "Amazon Simple Notification Service (Amazon SNS)",
        options: [
            "Amazon Simple Notification Service (Amazon SNS)",
            "AWS CloudTrail",
            "AWS Trusted Advisor",
            "Amazon Route 53",
        ]
    },

    {
        suite: 'J',
        question: "Where can a user find information about prohibited actions on the AWS infrastructure ?",
        reponse : "AWS Acceptable Use Policy",
        options: [
            "AWS Trusted Advisor",
            "AWS Identity and Access Management (IAM)",
            "AWS Billing Console",
            "AWS Acceptable Use Policy",
        ]
    },

 ]