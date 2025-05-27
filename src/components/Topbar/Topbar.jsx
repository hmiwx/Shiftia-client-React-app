import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'

export default function Topbar() {

  return (
    <nav className="text-white p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Brand w={12} h={12} fontsize="2xl" />
            <div className="flex gap-6 items-center">
                <Link to="/" className="nav-link hover:text-orange-300 transition-colors">ثبت‌نام</Link>
                <Link to="/" className="nav-link hover:text-orange-300 transition-colors">پشتیبانی</Link>
            </div>
        </div>
    </nav>
  )
}
