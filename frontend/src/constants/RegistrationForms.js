import { GrList } from 'react-icons/gr';
import {
    MdAppRegistration,
    MdSupervisorAccount,
    MdPerson,
    MdDescription,
    MdLocationPin
} from 'react-icons/md'

let statesList = [{
    value: "",
    disabled: true,
    text: "Select Your State*",
}];

fetch("http://localhost:8000/get-all-ngo-states/")
    .then((response) => (response.json()))
    .then((data) => {
        (data.states).map((state) => {
            const name = state.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());;

            statesList.push({
                value: state,
                disabled: false,
                text: name
            })
        })
    })
    .catch((err) => {
        console.error(err.message);
    })

export const ngoRegistration = [
    {
        type: "select",
        icon: {
            name: <GrList />,
            size: "text-2xl"
        },

        select: {
            name: "state",
            default: "",
            required: true,
        },

        options: statesList,
    },
    {
        type: "input",
        icon: {
            name: <MdAppRegistration />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "registration_number",
            placeholder: "Enter NGO registration No*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <MdSupervisorAccount />,
            size: "text-2xl"
        },

        input: {
            type: "number",
            name: "staff_count",
            placeholder: "Enter Total Staff Count at NGO*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <MdSupervisorAccount />,
            size: "text-2xl"
        },

        input: {
            type: "number",
            name: "volunteers_count",
            placeholder: "Enter Total Volunteer Count at NGO*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <MdPerson />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "coordinator",
            placeholder: "Enter NGO Coordinator Name*",
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
            placeholder: "Tell Us About Your NGO in Brief*",
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
            placeholder: "Enter Your Current Address*",
            required: true,
        }
    },
]

export const communityRegistration = [
    {
        type: "input",
        icon: {
            name: <MdSupervisorAccount />,
            size: "text-2xl"
        },

        input: {
            type: "number",
            name: "members_count",
            placeholder: "Enter Total Member Count at Community*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <MdPerson />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "coordinator",
            placeholder: "Enter Community Coordinator Name*",
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
            placeholder: "Tell Us About Your Community in Brief*",
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
            placeholder: "Enter Your Current Address*",
            required: true,
        }
    },
]