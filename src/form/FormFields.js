const FormFields = [
    [
      {
        name: "firstName",
        label: "First Name",
        type: "input",
        inputProps: {
          autoCorrect: false
        }
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "input",
        inputProps: {
          autoCorrect: false
        }
      }
    ],
    [
      {
        name: "address",
        label: "Address",
        type: "input",
        inputProps: {
          autoCorrect: false
        }
      }
    ],
    [
      {
        name: "destination",
        placeholder: "Pick a destination of your interest",
        pickerItems: [
          {
            label: "Saly",
            value: 0
          },
          {
            label: "Mbour",
            value: 1
          },
          {
            label: "Touba",
            value: 2
          },
          {
            label: "Mbao",
            value: 3
          }
        ],
        type: "picker"
      }
    ],
    [
      {
        name: "subscribe",
        label: "Subscribe me to weekly news from Tech world.",
        type: "boolean",
        defaultValue: true
      }
    ],
    [
      {
        name: "signUpButton",
        label: "Sign Up",
        type: "button"
      }
    ],
    [
      {
        name: "resetButton",
        label: "Reset",
        type: "button"
      }
    ]
  ];

  export default FormFields;