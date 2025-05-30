import React from 'react'
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Topbar from '../../components/Topbar/Topbar'
import Footer from '../../components/Footer/Footer'
import useForm from '../../hooks/useForm'
import Input from '../../components/Input/Input'
import {
    requiredValidator,
    minValidator,
    maxValidator,
    emailValidator,
    mobileValidator
} from '../../validators/Rules'

export default function Provider_Register() {
    const navigate = useNavigate();

    const [formState, onInputHandler] = useForm(
        {
            name: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            service: {
                value: "",
                isValid: false,
            },
            reqjob: {
                value: "",
                isValid: true,
            },
        },
        false
    );

    const registerProvider = async (event) => {
        event.preventDefault();
        const reqjob = formState.inputs.service === "other" ? formState.inputs.reqjob.value : formState.inputs.service.value

        const newUserInfos = {
            name: formState.inputs.name.value,
            phone: formState.inputs.phone.value,
            email: formState.inputs.email.value,
            reqjob,
        };

        try {
            const res = await fetch(`https://shiftia-default-rtdb.europe-west1.firebasedatabase.app/providers.json`, {
                method: "POST",
                body: JSON.stringify(newUserInfos),
            })
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText);
            }
            swal({
                title: "اطلاعات شما با موفقیت ثبت شد.\nاز همراهی شما سپاسگذاریم",
                icon: "success",
                buttons: "بازگشت",
            }).then(() => navigate('/'))

        } catch (err) {
            swal({
                title: "مشکلی در ثبت اطلاعات به وجود آمده.\nلطفا دوباره تلاش کنید",
                icon: "error",
                buttons: ["ارسال مجدد", "بازگشت"],
            }).then((op) => {
                switch (op) {
                    case "ارسال مجدد":
                        registerProvider();
                        break;
                    default:
                        navigate('/');
                }
            })
        }
    }
    return (
        <>
            <Topbar>
            {[
        {
          link: "/",
          text: "خانه"
        },
        {
          link: "/support",
          text: "پشتیبانی"
        }
      ]}
            </Topbar>
            <main className="max-w-md mx-auto mt-12 p-6 card fade-in">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-blue-900">به جمع شیفتی‌ها بپیوندید!</h1>
                    <p className="text-gray-700">در هنگام راه اندازی جزو اولین مطلعان باشید.</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block text-blue-900 font-bold">نام</label>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="علیرضا"
                                className={`w-full p-3 pl-10 ${formState.inputs.name.isValid ? "border-green-500" : "border-red-500"}`}
                                element="input"
                                id="name"
                                iconClasses="fas fa-user input-icon absolute inset-y-4 left-2 flex items-center pl-3 text-gray-400 pointer-events-none"
                                onInputHandler={onInputHandler}
                                validations={[
                                    requiredValidator(),
                                    minValidator(3),
                                    maxValidator(20),
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-blue-900 font-bold">شماره تلفن</label>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="09121111111"
                                className={`w-full p-3 pl-10 ${formState.inputs.phone.isValid ? "border-green-500" : "border-red-500"}`}
                                element="input"
                                id="phone"
                                iconClasses="fas fa-phone input-icon absolute inset-y-4 left-2 flex items-center pl-3 text-gray-400 pointer-events-none"
                                onInputHandler={onInputHandler}
                                validations={[
                                    requiredValidator(),
                                    mobileValidator(),
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-blue-900 font-bold">ایمیل</label>
                        <div className="relative">
                            <Input
                                type="email"
                                placeholder="info@gmail.com"
                                className={`w-full p-3 pl-10 ${formState.inputs.email.isValid ? "border-green-500" : "border-red-500"}`}
                                element="input"
                                id="email"
                                iconClasses="fas fa-envelope absolute inset-y-4 left-2 flex items-center pl-3 text-gray-400 pointer-events-none"
                                onInputHandler={onInputHandler}
                                validations={[
                                    requiredValidator(),
                                    emailValidator(),
                                ]}
                            />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label htmlFor="service" class="form-label">نوع خدمت</label>
                        <div class="relative">
                            <Input
                                className={`w-full p-3 pl-10 ${formState.inputs.service.isValid ? "border-green-500" : "border-red-500"}`}
                                element="select"
                                id="service"
                                name="service"
                                iconClasses="fas fa-briefcase absolute inset-y-4 left-2 flex items-center pl-3 text-gray-400 pointer-events-none"
                                onInputHandler={onInputHandler}
                                validations={[
                                    requiredValidator()
                                ]}
                                options={[
                                    { value: "", text: "یک خدمت را انتخاب کنید", isSelected: true, isDisabled: true },
                                    { value: "barber", text: "آرایشگر", isSelected: false, isDisabled: false },
                                    { value: "cleaner", text: "نظافتچی", isSelected: false, isDisabled: false },
                                    { value: "electrician", text: "برقکار", isSelected: false, isDisabled: false },
                                    { value: "mechanic", text: "تعمیرکار", isSelected: false, isDisabled: false },
                                    { value: "beautician", text: "متخصص زیبایی", isSelected: false, isDisabled: false },
                                    { value: "massage", text: "ماساژور", isSelected: false, isDisabled: false },
                                    { value: "nail", text: "متخصص ناخن", isSelected: false, isDisabled: false },
                                    { value: "other", text: "سایر", isSelected: false, isDisabled: false },
                                ]}

                            />
                        </div>
                    </div>
                    <div hidden={formState.inputs.service.value !== "other"}>
                        <label className="block text-blue-900 font-bold">درخواست اضافه کردن مشاغل شما:</label>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="عنوان مشاغل"
                                className={`w-full p-3 pl-10 ${formState.inputs.reqjob.isValid ? "border-green-500" : "border-red-500"}`}
                                element="input"
                                id="reqjob"
                                iconClasses="fas fa-briefcase absolute inset-y-4 left-2 flex items-center pl-3 text-gray-400 pointer-events-none"
                                onInputHandler={onInputHandler}
                                validations={[
                                    
                                ]}
                            />
                        </div>
                    </div>
                    <button type="submit"
                        className="w-full bg-orange-500 text-white p-3 rounded-full pulse disabled:opacity-50"
                        onClick={registerProvider}
                        disabled={!formState.isFormValid}>
                        ثبت‌نام
                    </button>
                </form>
            </main>
            <Footer />
        </>
    )
}
