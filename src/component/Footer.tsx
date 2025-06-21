import {AiFillFacebook, AiOutlineInstagram, AiOutlineDown} from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div
                className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start space-y-12 lg:space-y-0">

                {/* === Mobile layout === */}
                <div className="block md:hidden w-full space-y-6">
                    {/* Menu */}
                    <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer">
                            <span className="text-lg font-semibold"> Menu de pied de page </span>
                            <AiOutlineDown className="transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="text-sm space-y-2 mt-2">
                            <li>Politique de confidentialité</li>
                            <li>Politique de remboursement</li>
                            <li>Politique d&apos;expédition</li>
                            <li>Conditions d&apos;utilisation</li>
                        </ul>
                    </details>

                    {/* Contact */}
                    <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer">
                            <span className="text-lg font-semibold">Entrer en contact</span>
                            <AiOutlineDown className="transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="text-sm mt-2">
                            <p>+22372787846</p>
                            <p>contact@sanusenteurs.com</p>
                            <div className="flex justify-start space-x-4 mt-4">
                                <AiFillFacebook className="w-5 h-5"/>
                                <a
                                    href="https://www.instagram.com/sanusenteurs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiOutlineInstagram className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                    </details>

                    {/* Newsletter */}
                    <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer">
                            <span className="text-lg font-semibold">Inscription à la newsletter</span>
                            <AiOutlineDown className="transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="text-sm mt-2">
                            Abonnez-vous pour recevoir des offres spéciales, des cadeaux gratuits et des offres
                            uniques.
                        </p>
                    </details>
                </div>
                {/* === Desktop layout === */}
                <div
                    className="hidden md:flex flex-col md:flex-row w-full lg:flex-row md:space-x-16 w-full lg:w-auto space-y-8 md:space-y-0">
                    <div className="md:w-1/2 lg:w-auto">
                        <h3 className="text-lg font-bold mb-4">Menu de pied de page</h3>
                        <ul className="text-sm space-y-2">
                            <li>Politique de confidentialité</li>
                            <li>Politique de remboursement</li>
                            <li>Politique d&apos;expédition</li>
                            <li>Conditions d&apos;utilisation</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 lg:w-auto">
                        <h3 className="text-lg font-bold mb-4">Entrer en contact</h3>
                        <p className="text-sm">+22372787846</p>
                        <p className="text-sm">contact@sanusenteurs.com</p>
                        <div className="flex justify-start space-x-4 mt-4">
                            <AiFillFacebook className="w-5 h-5"/>
                            <a
                                href="https://www.instagram.com/sanusenteurs/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineInstagram className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block max-w-sm">
                    <h3 className="text-lg font-bold mb-4">Inscription à la newsletter</h3>
                    <p className="text-sm">Abonnez-vous pour recevoir des offres spéciales, des cadeaux gratuits et
                        des offres uniques.</p>
                </div>
            </div>
        </footer>
    );
}
