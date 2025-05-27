import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Footer from '../../components/Footer/Footer'

export default function Customer_Register() {
    return (
        <>
            <Topbar />
            <main className="max-w-md mx-auto mt-12 p-6 card fade-in">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-blue-900">به جمع شیفتی‌ها بپیوندید!</h1>
                    <p className="text-gray-700">در هنگام راه اندازی جزو اولین مطلعان باشید.</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block text-blue-900 font-bold">نام</label>
                        <input type="text" className="w-full p-3" placeholder="علیرضا" />
                    </div>
                    <div>
                        <label className="block text-blue-900 font-bold">شماره تلفن</label>
                        <input type="text" className="w-full p-3" placeholder="09121111111" />
                    </div>
                    <div>
                        <label className="block text-blue-900 font-bold">ایمیل</label>
                        <input type="email" className="w-full p-3" placeholder="info@gmail.com" />
                    </div>
                    <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded-full pulse">ثبت‌نام</button>
                </form>
            </main>
            <Footer />
        </>
    )
}
