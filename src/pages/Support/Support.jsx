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


export default function Support() {
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
            title: {
                value: "",
                isValid: false,
            },
            text: {
                value: "",
                isValid: false,
            },

        },
        false
    );

    const sendTicket = async (event) => {
        event.preventDefault();

        const newUserInfos = {
            name: formState.inputs.name.value,
            phone: formState.inputs.phone.value,
            email: formState.inputs.email.value,
            title: formState.inputs.title.value,
            text: formState.inputs.text.value
        };

        try {
            const res = await fetch(`https://shiftia-default-rtdb.europe-west1.firebasedatabase.app/tickets.json`, {
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
                buttons: "ارسال مجدد"
            }).then(() => sendTicket())
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
                        link: "/#regbox",
                        text: "ثبت‌نام"
                    }
                ]}
            </Topbar>
            <main className="max-w-md mx-auto mt-12 p-6 card fade-in">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-blue-900">ثبت تیکت پشتیبانی</h1>
                    <p className="text-gray-700">پیشنهادات خود را با ما در میان بگذارید!</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block text-blue-900 font-bold">نام</label>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="علیرضا"
                                className="w-full p-3 pl-10"
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
                                className="w-full p-3 pl-10"
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
                                className="w-full p-3 pl-10"
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
                    <div>
                        <label className="block text-blue-900 font-bold">عنوان</label>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="راه اندازی سریعتر پلتفرم"
                                className="w-full p-3 pl-10"
                                element="input"
                                id="title"
                                onInputHandler={onInputHandler}
                                validations={[
                                    requiredValidator(),
                                    maxValidator(50),
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-blue-900 font-bold">متن درخواست</label>
                        <div className="relative">
                            <Input
                                placeholder="لطفا متن درخواست را اینجا وارد کنید."
                                className="w-full p-3 pl-10"
                                element="textarea"
                                id="text"
                                onInputHandler={onInputHandler}
                                validations={[
                                    requiredValidator(),
                                    minValidator(5),
                                    maxValidator(500),
                                ]}
                            />
                        </div>
                    </div>
                    <button type="submit"
                        className="w-full bg-orange-500 text-white p-3 rounded-full pulse disabled:opacity-50"
                        onClick={sendTicket}
                        disabled={!formState.isFormValid}>
                        ثبت‌نام
                    </button>
                </form>
            </main>
            <Footer />
        </>
    )
}
