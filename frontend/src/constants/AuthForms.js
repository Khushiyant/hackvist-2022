import { FaUser, FaPhoneAlt } from 'react-icons/fa'
import { GrMail, GrList } from 'react-icons/gr'
import { HiLockClosed, HiLink } from 'react-icons/hi'

export const loginForm = [
    {
        type: "input",
        icon: {
            name: <GrMail />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "email",
            placeholder: "Enter Your Email ID*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <HiLockClosed />,
            size: "text-2xl"
        },

        input: {
            type: "password",
            name: "password",
            placeholder: "Enter Your Password*",
            required: true,
        }
    },
]

export const signupForm = [
    {
        type: "input",
        icon: {
            name: <FaUser />,
            size: "text-xl"
        },

        input: {
            type: "text",
            name: "name",
            placeholder: "Enter Your Full Name*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <GrMail />,
            size: "text-2xl"
        },

        input: {
            type: "email",
            name: "email",
            placeholder: "Enter Your Email ID*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <FaPhoneAlt />,
            size: "text-lg"
        },

        input: {
            type: "tel",
            name: "phone",
            placeholder: "Enter Your Phone Number*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <HiLink />,
            size: "text-2xl"
        },

        input: {
            type: "url",
            name: "profile_image",
            placeholder: "Enter URL of Your Profile Image*",
            required: false,
        }
    },
    {
        type: "input",
        icon: {
            name: <HiLockClosed />,
            size: "text-2xl"
        },

        input: {
            type: "password",
            name: "password",
            placeholder: "Enter Your Password*",
            required: true,
        }
    },
    {
        type: "input",
        icon: {
            name: <HiLockClosed />,
            size: "text-2xl"
        },

        input: {
            type: "password",
            name: "confirmPassword",
            placeholder: "Confirm Your Password*",
            required: true,
        }
    },
    {
        type: "select",
        icon: {
            name: <GrList />,
            size: "text-2xl",
        },

        select: {
            name: "user_type",
            default: "",
            required: true,
        },

        options: [
            { value: "", disabled: true, text: "Select User Type*", },
            { value: "INDIVIDUAL", disabled: false, text: "Individual", },
            { value: "NGO", disabled: false, text: "NGO", },
            { value: "COMMUNITY", disabled: false, text: "Community", },
        ]
    },
]