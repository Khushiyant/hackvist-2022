import { AiFillBank } from 'react-icons/ai'
import { GrList } from 'react-icons/gr'
import {
    MdEventNote,
    MdDescription,
    MdLocationPin,
    MdDateRange,
} from 'react-icons/md'

export const projectsForm = [
    {
        type: "input",
        icon: {
            name: <MdEventNote />,
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
            name: <MdDescription />,
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
            name: <MdLocationPin />,
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
            name: <MdDateRange />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "start_date",
            id: "date",
            placeholder: "Event Starts At*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <MdDateRange />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "end_date",
            id: "date",
            placeholder: "Event Ends At*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <AiFillBank />,
            size: "text-2xl"
        },

        input: {
            type: "number",
            name: "bank_account_number",
            placeholder: "Enter Your Bank Account Number*",
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
            name: "bank_name",
            placeholder: "Enter Name of Your Bank*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <AiFillBank />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "bank_ifsc",
            placeholder: "Enter IFSC Code of Your Bank*",
            required: true,
        }
    },
]