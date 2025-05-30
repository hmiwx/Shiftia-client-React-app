import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'

export default function Topbar(props) {

  return (
    <nav className="text-white p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <img src={Logo} alt="Logo" className="w-[147%] h-[147%] object-cover"/>
                </div>
                <h1 className="text-2xl font-bold">شیفتیا</h1>
            </div>
            <div className="flex gap-6 items-center">
                {
                    props.children.map(value=>(
                        <Link to={value.link} className="nav-link hover:text-orange-300 transition-colors">{value.text}</Link>
                        )
                    )
                }
            </div>
        </div>
    </nav>
  )
}
