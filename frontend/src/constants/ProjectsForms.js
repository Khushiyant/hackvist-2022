import { GrMail, GrList } from 'react-icons/gr'

// ==================================================
export const projectsForm = [
    {
        type: "input",
        icon: {
            name: <GrList />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "name",
            placeholder: "Enter Name of Event",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <GrList />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "description",
            placeholder: "Give a Brief Description of Your Event*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <GrList />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "location",
            placeholder: "Enter Location of Event*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <GrList />,
            size: "text-2xl"
        },

        input: {
            type: "date",
            name: "start_date",
            placeholder: "Event Starts At*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <GrList />,
            size: "text-2xl"
        },

        input: {
            type: "date",
            name: "end_date",
            placeholder: "Event Ends At*",
            required: true,
        }
    },
]