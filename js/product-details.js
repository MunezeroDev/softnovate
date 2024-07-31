document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productTitle = urlParams.get('product');

    const products = {
        "Hospital Management System (HMS)": {
            title: "Hospital Management System",
            image: "/assets/img/portfolio/hospital.jpg",
            video: "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            features: [
                {
                    name: "Patient Registration and Management",
                    icon: "bx bx-group",
                    description: "Efficiently manage patient information, medical history, and appointments."
                },
                {
                    name: "Appointment Scheduling",
                    icon: "bx bx-calendar",
                    description: "Streamline the process of booking and managing patient appointments."
                },
                {
                    name: "Electronic Health Records (EHR)",
                    icon: "bx bx-file",
                    description: "Maintain comprehensive digital records of patient health information."
                },
                {
                    name: "Billing and Invoicing",
                    icon: "bx bx-receipt",
                    description: "Generate accurate bills and invoices for services rendered."
                },
                {
                    name: "Inventory Management",
                    icon: "bx bx-box",
                    description: "Track and manage medical supplies and equipment inventory."
                },
                {
                    name: "Laboratory and Radiology Integration",
                    icon: "bx bx-test-tube",
                    description: "Seamlessly integrate lab and radiology results into patient records."
                },
                {
                    name: "Staff Management",
                    icon: "bx bx-user",
                    description: "Manage hospital staff, schedules, and performance tracking."
                },
                {
                    name: "Reporting and Analytics",
                    icon: "bx bx-line-chart",
                    description: "Generate insightful reports and analytics for informed decision-making."
                }
            ]
        },
        "Pharmacy Management System": {
            title: "Pharmacy Management System",
            image: "/assets/img/portfolio/pharmacy.jpg",
            video: "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            features: [
                {
                    name: "Inventory Management",
                    icon: "bx bx-box",
                    description: "Track and manage stock levels, expiry dates, and reorder points for efficient inventory control and reduced wastage."
                },
                {
                    name: "Prescription Management",
                    icon: "bx bx-receipt",
                    description: "Process prescriptions with ease, ensuring accurate dispensing, dosage verification, and patient safety."
                },
                {
                    name: "Patient Management",
                    icon: "bx bx-group",
                    description: "Maintain detailed patient records, including medication history, allergies, and preferences for personalized care."
                },
                {
                    name: "Appointment Scheduling",
                    icon: "bx bx-calendar",
                    description: "Manage appointments and consultations with healthcare professionals, ensuring timely service and patient satisfaction."
                },
                {
                    name: "Point of Sale (POS)",
                    icon: "bx bx-cart",
                    description: "Streamline the sales process with an integrated POS system, handling transactions, receipts, and inventory updates."
                },
                {
                    name: "Sales and Revenue Analytics",
                    icon: "bx bx-line-chart",
                    description: "Monitor sales trends, revenue streams, and performance metrics with comprehensive analytics and reporting tools."
                },
                {
                    name: "Regulatory Compliance",
                    icon: "bx bx-clipboard",
                    description: "Ensure compliance with healthcare regulations and standards, including controlled substances management and reporting."
                },
                {
                    name: "Security and Data Protection",
                    icon: "bx bx-shield",
                    description: "Safeguard patient and business data with robust security measures, including access controls and data encryption."
                }
            ]
        },
        "Inventory Management System": {
            title: "Inventory Management System",
            image: "/assets/img/portfolio/inventory.jpg",
            video: "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            features: [
        {
            name: "Stock Management",
            icon: "bx bx-box",
            description: "Monitor and manage inventory levels, track stock movements, and maintain accurate records of products in real-time."
        },
        {
            name: "Order Management",
            icon: "bx bx-cart",
            description: "Handle orders efficiently, from receiving and processing to dispatch and delivery, ensuring timely fulfillment."
        },
        {
            name: "Inventory Tracking",
            icon: "bx bx-search",
            description: "Keep track of products across multiple locations, monitor stock levels, and generate reports on inventory status and movements."
        },
        {
            name: "Sales and Purchase Analysis",
            icon: "bx bx-line-chart",
            description: "Analyze sales and purchase data to identify trends, forecast demand, and make informed decisions for inventory optimization."
        },
        {
            name: "Reorder Management",
            icon: "bx bx-refresh",
            description: "Automate reorder processes with alerts and recommendations, ensuring optimal stock levels and preventing stockouts or overstocking."
        },
        {
            name: "Barcode Scanning",
            icon: "bx bx-barcode",
            description: "Utilize barcode scanning for quick and accurate inventory tracking, reducing manual errors and enhancing efficiency."
        },
        {
            name: "Warehouse Management",
            icon: "bx bx-building",
            description: "Optimize warehouse operations with tools for space management, stock organization, and real-time tracking of inventory movement."
        },
        {
            name: "Security and Compliance",
            icon: "bx bx-shield",
            description: "Ensure data security and regulatory compliance with access controls, audit trails, and secure data storage."
        }
    ]
        },
        "Point of Sales (POS)": {
            title: "Point of Sales (POS)",
            image: "/assets/img/portfolio/pos.png",
            video: "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            features: [
                    {
                        name: "Sales Transactions",
                        icon: "bx bx-cart",
                        description: "Process sales transactions quickly and efficiently, with support for various payment methods and receipt generation."
                    },
                    {
                        name: "Inventory Management",
                        icon: "bx bx-box",
                        description: "Track inventory in real-time, manage stock levels, and receive low-stock alerts to ensure smooth operations."
                    },
                    {
                        name: "Customer Management",
                        icon: "bx bx-group",
                        description: "Maintain detailed customer profiles, track purchase history, and manage loyalty programs to enhance customer relationships."
                    },
                    {
                        name: "Receipts and Invoicing",
                        icon: "bx bx-receipt",
                        description: "Generate and print receipts or invoices, customize them with branding, and manage digital receipts for easy record-keeping."
                    },
                    {
                        name: "Payment Processing",
                        icon: "bx bx-credit-card",
                        description: "Accept a wide range of payment methods, including credit cards, mobile payments, and cash, with integrated payment gateways."
                    },
                    {
                        name: "Sales Reporting",
                        icon: "bx bx-line-chart",
                        description: "Access detailed sales reports, track performance metrics, and analyze trends to make informed business decisions."
                    },
                    {
                        name: "Employee Management",
                        icon: "bx bx-user",
                        description: "Manage employee roles, track hours, and monitor sales performance to optimize staff efficiency and security."
                    },
                    {
                        name: "Security and Compliance",
                        icon: "bx bx-shield",
                        description: "Ensure secure transactions with advanced encryption, compliance with industry standards, and fraud detection features."
                    }
                ]
        },

        "Rental Management System": {
            title: "Rental Management System",
            image: "/assets/img/portfolio/rental.jpg",
            video: "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            features: [
        {
            name: "Property Management",
            icon: "bx bx-building",
            description: "Manage property details, track unit availability, and oversee maintenance schedules to ensure smooth operations."
        },
        {
            name: "Tenant Management",
            icon: "bx bx-group",
            description: "Maintain tenant records, track lease agreements, and manage communications to provide excellent tenant service."
        },
        {
            name: "Lease Management",
            icon: "bx bx-file",
            description: "Manage lease agreements, renewals, and terminations with automated reminders and detailed lease tracking."
        },
        {
            name: "Rent Collection",
            icon: "bx bx-dollar",
            description: "Streamline rent collection with automated billing, payment tracking, and late fee calculations for efficient financial management."
        },
        {
            name: "Financial Reporting",
            icon: "bx bx-line-chart",
            description: "Generate detailed financial reports, including income, expenses, and profit analysis, for informed decision-making."
        },
        {
            name: "Maintenance Management",
            icon: "bx bx-wrench",
            description: "Track maintenance requests, schedule repairs, and manage vendor communications to maintain property quality."
        },
        {
            name: "Online Portals",
            icon: "bx bx-globe",
            description: "Provide tenants and property owners with online portals for easy access to information, payments, and communications."
        },
        {
            name: "Security and Compliance",
            icon: "bx bx-shield",
            description: "Ensure data security and compliance with industry regulations, including tenant data protection and financial reporting standards."
        }
    ]
        },
        "School Management System": {
            title: "School Management System",
            image: "/assets/img/portfolio/school.jpg",
            video: "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            features: [
            {
                name: "Student Information Management",
                icon: "bx bx-user",
                description: "Maintain comprehensive student records, including personal details, academic history, and attendance."
            },
            {
                name: "Classroom Management",
                icon: "bx bx-chalkboard",
                description: "Organize and manage classes, schedules, and subjects, ensuring smooth operation of academic activities."
            },
            {
                name: "Attendance Tracking",
                icon: "bx bx-calendar-check",
                description: "Monitor student attendance with real-time tracking, reporting, and automated notifications to parents."
            },
            {
                name: "Timetable Scheduling",
                icon: "bx bx-time",
                description: "Create and manage timetables for students and teachers, optimizing schedules for efficient learning."
            },
            {
                name: "Fee Management",
                icon: "bx bx-dollar",
                description: "Handle fee collection, track payments, and manage financial records with ease, ensuring transparency and accountability."
            },
            {
                name: "Exam and Grades Management",
                icon: "bx bx-test-tube",
                description: "Organize exams, record grades, and generate report cards, providing a clear overview of student performance."
            },
            {
                name: "Teacher Management",
                icon: "bx bx-user-voice",
                description: "Manage teacher profiles, schedules, and performance evaluations to ensure high-quality education delivery."
            },
            {
                name: "Communication Tools",
                icon: "bx bx-message",
                description: "Facilitate effective communication between parents, teachers, and students through messaging and announcements."
            }
    ]
        },
        "Auto Shop Management System": {
            "title": "Auto Shop Management System",
            "image": "/assets/img/portfolio/automotive.jpg",
            "video": "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            "features": [
            {
                "name": "Vehicle Registration and Management",
                "icon": "bx bx-car",
                "description": "Register and manage vehicles, including details such as model, make, and owner information for streamlined service tracking."
            },
            {
                "name": "Appointment Scheduling",
                "icon": "bx bx-calendar",
                "description": "Schedule maintenance and repair appointments with ease, complete with reminders and notifications for timely service."
            },
            {
                "name": "Service and Repair Tracking",
                "icon": "bx bx-wrench",
                "description": "Keep detailed records of services and repairs performed on vehicles, including parts used and work done, for accurate tracking."
            },
            {
                "name": "Billing and Invoicing",
                "icon": "bx bx-receipt",
                "description": "Streamline billing with automated invoicing and payment processing, ensuring accurate and efficient financial management."
            },
            {
                "name": "Inventory Management",
                "icon": "bx bx-box",
                "description": "Manage and track spare parts and accessories, with real-time updates and alerts for low stock and reordering needs."
            },
            {
                "name": "Workshop Management",
                "icon": "bx bx-building",
                "description": "Oversee workshop operations, including staff schedules, job assignments, and workflow optimization for efficient service delivery."
            },
            {
                "name": "Employee Management",
                "icon": "bx bx-user",
                "description": "Manage employee details, payroll, and performance tracking to ensure smooth workshop operations and staff management."
            },
            {
                "name": "Reporting and Analytics",
                "icon": "bx bx-line-chart",
                "description": "Generate detailed reports and analytics on vehicle service history, inventory levels, and financial performance for strategic insights."
            }
        ]
        },
        "Hotel Management System": {
            "title": "Hotel Management System",
            "image": "/assets/img/portfolio/hotel.jpg",
            "video": "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            "features": [
                {
                    "name": "Room Booking and Management",
                    "icon": "bx bx-hotel",
                    "description": "Efficiently manage room bookings, availability, and reservations, including guest check-in and check-out processes."
                },
                {
                    "name": "Event and Conference Management",
                    "icon": "bx bx-calendar-event",
                    "description": "Organize and manage events, conferences, and meetings, including scheduling, guest list management, and venue arrangements."
                },
                {
                    "name": "Food and Beverage Management",
                    "icon": "bx bx-restaurant",
                    "description": "Oversee dining services, including menu planning, order tracking, and inventory management for restaurants and bars."
                },
                {
                    "name": "Billing and Invoicing",
                    "icon": "bx bx-receipt",
                    "description": "Streamline billing and invoicing processes, including room charges, service fees, and payment processing for guests."
                },
                {
                    "name": "Inventory and Housekeeping",
                    "icon": "bx bx-bed",
                    "description": "Manage housekeeping schedules, inventory of supplies, and maintenance tasks to ensure a comfortable guest experience."
                },
                {
                    "name": "Guest Relationship Management",
                    "icon": "bx bx-user-voice",
                    "description": "Enhance guest experiences through personalized service, feedback management, and loyalty programs to increase satisfaction."
                },
                {
                    "name": "Staff Management",
                    "icon": "bx bx-group",
                    "description": "Oversee staff schedules, payroll, and performance tracking to ensure efficient operations and excellent service delivery."
                },
                {
                    "name": "Reporting and Analytics",
                    "icon": "bx bx-line-chart",
                    "description": "Generate detailed reports and analytics on occupancy rates, guest demographics, revenue, and other key metrics for strategic planning."
                }
            ]
        },

        "Learning Management System": {
            "title": "Learning Management System",
            "image": "/assets/img/portfolio/web.jpg",
            "video": "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            "features": [
                {
                    "name": "Course Management",
                    "icon": "bx bx-book",
                    "description": "Create, organize, and manage courses with ease, including syllabus design, content delivery, and assessments."
                },
                {
                    "name": "Student Enrollment",
                    "icon": "bx bx-user-plus",
                    "description": "Manage student enrollments, track progress, and maintain detailed records for individual learners."
                },
                {
                    "name": "Multimedia Content",
                    "icon": "bx bx-video",
                    "description": "Deliver rich multimedia content including videos, audio, and interactive materials to enhance the learning experience."
                },
                {
                    "name": "Communication Tools",
                    "icon": "bx bx-message",
                    "description": "Facilitate communication between students and instructors through discussion forums, messaging, and announcements."
                },
                {
                    "name": "Assignments and Quizzes",
                    "icon": "bx bx-task",
                    "description": "Create and manage assignments, quizzes, and exams with automated grading and feedback for timely evaluation."
                },
                {
                    "name": "Scheduling and Calendar",
                    "icon": "bx bx-calendar",
                    "description": "Plan and manage class schedules, deadlines, and events with a comprehensive calendar tool."
                },
                {
                    "name": "Certification and Badging",
                    "icon": "bx bx-medal",
                    "description": "Award certificates and digital badges to recognize student achievements and track learning milestones."
                },
                {
                    "name": "Analytics and Reporting",
                    "icon": "bx bx-line-chart",
                    "description": "Analyze student performance, track engagement, and generate detailed reports for data-driven insights."
                }
            ]
        },
        "Legal Management System": {
            "title": "Legal Management System",
            "image": "/assets/img/portfolio/legal.jpg",
            "video": "https://youtu.be/UfEiKK-iX70?si=YIP0LZSlJoLA7BJh",
            "features": [
                {
                    "name": "Case Management",
                    "icon": "bx bx-folder",
                    "description": "Organize and manage cases efficiently, including case details, documents, and timelines for streamlined workflows."
                },
                {
                    "name": "Client Management",
                    "icon": "bx bx-user",
                    "description": "Maintain comprehensive client records, track interactions, and manage client communications for improved service."
                },
                {
                    "name": "Calendar and Scheduling",
                    "icon": "bx bx-calendar",
                    "description": "Plan and manage appointments, court dates, and deadlines with a centralized calendar to keep your legal practice organized."
                },
                {
                    "name": "Document Management",
                    "icon": "bx bx-file",
                    "description": "Store, organize, and retrieve legal documents securely, ensuring easy access and compliance with data protection regulations."
                },
                {
                    "name": "Billing and Invoicing",
                    "icon": "bx bx-receipt",
                    "description": "Automate billing processes, generate invoices, and manage payments to streamline financial management for your practice."
                },
                {
                    "name": "Communication Tools",
                    "icon": "bx bx-message",
                    "description": "Facilitate secure communication with clients and team members through integrated messaging and email functionalities."
                },
                {
                    "name": "Analytics and Reporting",
                    "icon": "bx bx-line-chart",
                    "description": "Gain insights into case performance, client trends, and financial metrics with detailed analytics and reporting tools."
                },
                {
                    "name": "Compliance and Security",
                    "icon": "bx bx-shield",
                    "description": "Ensure compliance with legal and regulatory standards, including data protection, and maintain robust security measures."
                }
            ]
        },

        // More products...
    };

    const product = products[productTitle];

    if (product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-image').style.backgroundImage = `url(${product.image})`;
        document.getElementById('product-video').href = product.video;

        const featuresContainer = document.getElementById('features-container');
        featuresContainer.innerHTML = ''; // Clear existing content

        product.features.forEach((feature, index) => {
            const featureHTML = `
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                        <div class="icon"><i class="${feature.icon}"></i></div>
                        <h4 class="title"><a href="">${feature.name}</a></h4>
                        <p class="description">${feature.description}</p>
                    </div>
                </div>
            `;
            featuresContainer.innerHTML += featureHTML;
        });

        // Wrap features in rows of 4
        const featureBoxes = featuresContainer.querySelectorAll('.col-md-6.col-lg-3');
        for (let i = 0; i < featureBoxes.length; i += 4) {
            const row = document.createElement('div');
            row.className = 'row';
            row.style.marginBottom = '1rem';
            if (i >= 4) row.style.marginTop = '1rem';
            featureBoxes[i].parentNode.insertBefore(row, featureBoxes[i]);
            row.appendChild(featureBoxes[i]);
            if (featureBoxes[i + 1]) row.appendChild(featureBoxes[i + 1]);
            if (featureBoxes[i + 2]) row.appendChild(featureBoxes[i + 2]);
            if (featureBoxes[i + 3]) row.appendChild(featureBoxes[i + 3]);
        }
    } else {
        document.getElementById('product-title').textContent = "Product Not Found";
    }
});