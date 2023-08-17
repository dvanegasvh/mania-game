import AllInboxIcon from '@mui/icons-material/AllInbox';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Button, InputAdornment, OutlinedInput, Stack, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { CardDescription } from '@/components/card-description';
import { CardInformation } from '@/components/card-information';
import { Main } from '@/components/main';
import { TitleSection } from '@/components/title-section';
import { CreateCategoryHoc } from '@/hoc/create-category/CreateCategoryHoc';
import { SUB_ROUTES_NAMES } from '@/models/Routes';
import { Scrollbar } from '@/styles/scrollbar/Scrollbar';
import { getSubRouteTitle } from '@/utils/routes';

const Products: React.FC = () => {
	const titlePage = getSubRouteTitle(SUB_ROUTES_NAMES.PRODUCTS);
	return (
		<Main title={titlePage}>
			<TitleSection title={titlePage}>
				<Button variant="contained" startIcon={<ControlPointIcon />}>
					Crear producto
				</Button>
				<CreateCategoryHoc
					Button={props => (
						<Button
							{...props}
							variant="outlined"
							sx={{
								borderWidth: 2.5,
								borderColor: 'primary.main',
								'&:hover': {
									borderWidth: 2.5,
									borderColor: 'primary.main',
								},
							}}
						/>
					)}
				/>
			</TitleSection>
			<Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 2, lg: 10 }}>
				<CardInformation
					icon={<AllInboxIcon sx={{ height: 35, width: 35 }} />}
					name="Referencias totales"
					value="200000"
					background="#BDBDBD"
				/>
				<CardInformation icon="dollar" name="Costo total del inventario" value="10000" />
			</Stack>
			<Stack direction={{ lg: 'row', xs: 'column' }} justifyContent="space-between" spacing={{ xs: 2 }}>
				<OutlinedInput
					sx={{ width: { lg: 400, xs: '100%' } }}
					placeholder="Buscar producto..."
					startAdornment={
						<InputAdornment position="start">
							<SearchSharpIcon />
						</InputAdornment>
					}
				/>
				<Stack direction={'row'} sx={{ width: { lg: 500, xs: '100%' } }} spacing={2}>
					<TextField sx={{ width: '100%' }} label="Categoría" select onChange={e => { console.log(e.target.value); }}>
						<MenuItem value={1} sx={{ backgroundColor: 'transparent !important' }}>
							Prueba
						</MenuItem>
						<MenuItem value={2} sx={{ backgroundColor: 'transparent !important' }}>
							Prueba
						</MenuItem>
						<MenuItem sx={{ backgroundColor: 'transparent !important' }}>Prueba</MenuItem>
					</TextField>
					<TextField sx={{ width: '100%' }} label="Ordenar por" select onChange={e => { console.log(e.target.value); }}>
						<MenuItem value={1} sx={{ backgroundColor: 'transparent !important' }}>
							Prueba
						</MenuItem>
						<MenuItem value={2} sx={{ backgroundColor: 'transparent !important' }}>
							Prueba
						</MenuItem>
						<MenuItem sx={{ backgroundColor: 'transparent !important' }}>Prueba</MenuItem>
					</TextField>
				</Stack>
			</Stack>
			<Scrollbar>
				<Stack
					direction={'row'}
					justifyContent={'center'}
					flexWrap={'wrap'}
					maxHeight={{ lg: 'calc(100vh - 34.4rem)', xs: 'calc(100vh - 18rem)' }}
					sx={{
						columnGap: 5,
						rowGap: 5,
					}}
				>
					<CardDescription />
					<CardDescription />
					<CardDescription />
					<CardDescription />
					<CardDescription />
					<CardDescription />
					<CardDescription />
					<CardDescription />
					<CardDescription />
					<CardDescription />
				</Stack>
			</Scrollbar>
		</Main>
	);
};

export default Products;
