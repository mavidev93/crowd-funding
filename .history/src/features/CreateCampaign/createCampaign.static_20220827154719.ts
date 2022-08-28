expoimport * as Yup from "yup";
rt  const initialValues = {

    campaignTitle: "",
    goalAmount: "",
    fundingPeriodInDays: "",
    walletAddress: "",
  }
  export  const  validationSchema={Yup.object().shape({
    campaignTitle: Yup.string().required("Required!"),
    fundingPeriodInDays: Yup.number()
      .min(1)
      .max(365)
      .required("Required!"),
    goalAmount: Yup.number()
      .min(0.001, "should be more than 0.001")
      .typeError("you must specify a number")
      .required("Required!"),
  })}