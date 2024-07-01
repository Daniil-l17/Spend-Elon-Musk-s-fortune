'use client';
import { Footer } from '@/components/footer/Footer';
import { Loading } from '@/components/loading/Loading';
import { Product } from '@/components/product/Product';
import { SpendAfortune } from '@/components/spendAfortune/SpendAfortune';
import { TotalValue } from '@/components/totalValue/TotalValue';
import { useFetch } from '@/hooks/useFetch';
import { useTotalCount } from '@/hooks/useTotalCount';
import { useEffect, useState } from 'react';

export interface Product {
	title: string;
	price: string;
	img: string;
	count?: number;
	id: number;
}

export default function Home() {
	const [data, setData] = useState<Product[]>([]);
	const { data: result, isError, isloading } = useFetch<Product>();
	const totalCount = useTotalCount(data);

	useEffect(() => {
		if (result) {
			setData(result);
		}
	}, [result]);

	const addItems = (id: number) => {
		const copy = [...data];
		const item = copy.find(function (item) {
			return item.id === id;
		});
		if (item?.count) {
			item.count += 1;
		} else {
			item!.count = 1;
		}
		setData(copy);
	};

	const deleteitems = (id: number) => {
		const copy = [...data];
		const item = copy.find(function (item) {
			return item.id === id;
		});
		if (item?.count) {
			if (item.count > 1) {
				item.count -= 1;
			} else {
				delete item!.count;
			}
		}
		setData(copy);
	};

	const inputShange = ({ e, id }: { e: React.ChangeEvent<HTMLInputElement>; id: number }) => {
		const copy = [...data];
		const item = copy.find(function (item) {
			return item.id === id;
		});
		item!.count = +e.target.valueAsNumber;
		setData(copy);
	};

	return (
		<div className='min-h-[100vh] mt-8 gap-6 flex flex-col justify-between'>
			<div className='m-auto flex flex-col px-6 w-full max-w-[1048px]'>
				<SpendAfortune />
				<TotalValue totalResult={totalCount} />
				<div className='min-h-[50vh]'>
					{isloading ? (
						<div className='flex w-full h-[400px] justify-center items-center'>
							<Loading />
						</div>
					) : isError ? (
						<div className='flex w-full h-[400px] justify-center items-center'>
							<p>ошибка при получение данных</p>
						</div>
					) : data ? (
						<div className='w-full flex flex-wrap justify-between gap-4 mt-4'>
							{data.map(function (item) {
								return <Product addItems={addItems} inputShange={inputShange} deleteitems={deleteitems} item={item} />;
							})}
						</div>
					) : null}
				</div>
			</div>
			<Footer />
		</div>
	);
}
