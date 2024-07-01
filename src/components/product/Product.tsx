import Image from 'next/image';
import { FC } from 'react';

interface Props {
	item: {
		title: string;
		price: string;
		img: string;
		count?: number;
		id: number;
	};
	deleteitems: (id: number) => void;
	addItems: (id: number) => void;
	inputShange: ({ id, e }: { e: React.ChangeEvent<HTMLInputElement>; id: number }) => void;
}

export const Product: FC<Props> = ({ item, deleteitems, addItems, inputShange }) => {
	return (
		<div key={item.id} className='gradiend flex gap-6 flex-col justify-center items-center py-6 w-[320px] rounded-lg '>
			<Image className='w-auto h-[139px]' src={`/${item.img}`} width={100} height={100} alt='product' />
			<h2 className=' text-[22px] font-semibold'>{item.title}</h2>
			<span className=' text-emerald-500 font-bold text-2xl'>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(+item.price)}
			</span>
			<div className='flex w-full px-4 justify-between'>
				<button onClick={() => deleteitems(item.id)} className={` ${item.count ? 'bg-[#db4e4e]' : 'bg-[#9299a4]'} px-2 transition duration-150 py-2 font-semibold rounded-md text-white`}>
					продать
				</button>
				<input min={0} value={item.count ?? 0} onChange={e => inputShange({ e, id: item.id })} className='w-[100px] text-center' type='number' />
				<button onClick={() => addItems(item.id)} className='bg-[#4eca7d] px-2 font-semibold py-2 rounded-md text-white'>
					купить
				</button>
			</div>
		</div>
	);
};
