import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Sidebar() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
};
return (
    <div className="flex min-h-screen flex-col items-center text-center justify-between p-24">
        <div>
            
        </div>
    </div>
)
}