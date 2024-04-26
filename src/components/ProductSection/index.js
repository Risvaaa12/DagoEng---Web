import Link from "next/link";
import Image from 'next/image';
import topologiImg from '../img/Topologi.jpg';
// import sampingImg from '../img/Samping.jpg'; // Contoh gambar samping
// import atasImg from '../img/Atas.jpg'; // Contoh gambar atas
// import depanImg from '../img/Depan.jpg'; // Contoh gambar depan

const ProductSection = () => {
    // Data produk dengan gambar dan deskripsi
    const products = [
        { id: 1, name: 'Tampak Samping', image: topologiImg, description: 'Deskripsi untuk tampak samping.' },
        { id: 2, name: 'Tampak Atas', image: topologiImg, description: 'Deskripsi untuk tampak atas.' },
        { id: 3, name: 'Tampak Depan', image: topologiImg, description: 'Deskripsi untuk tampak depan.' },
    ];

    return (
        <div className="lg:mt-12">
            <div>
                <h1 className="text-3xl font-bold text-center lg:text-5xl">Our Product</h1>
                <p className="text-center">Design Hidroponik Kami</p>
            </div>
            <div className="grid grid-cols-1 gap-4 px-8 py-6 md:px-56 lg:grid-cols-3 lg:px-52">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="relative w-full h-56 lg:h-96">
                            <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
