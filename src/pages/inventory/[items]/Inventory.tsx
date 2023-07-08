import AllInboxIcon from '@mui/icons-material/AllInbox';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Avatar, Button, Card, CardContent, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { CardDescription } from '@/components/card-description';
import { Icon } from '@/components/icon';
import { Main } from '@/components/main';
import { TitleSection } from '@/components/title-section';
import { Scrollbar } from '@/styles/scrollbar/Scrollbar';

const Inventory: React.FC = () => {
	return (
		<Main title="Inventario">
			<TitleSection title="Inventario">
				<Button variant="contained" startIcon={<ControlPointIcon />}>
					Crear producto
				</Button>
				<Button
					variant="outlined"
					startIcon={<ControlPointIcon />}
					sx={{
						borderWidth: 2.5,
						borderColor: 'primary.main',
						'&:hover': {
							borderWidth: 2.5,
							borderColor: 'primary.main',
						},
					}}
				>
					Crear categoría
				</Button>
			</TitleSection>
			<Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 2, lg: 10 }}>
				<Card>
					<CardContent>
						<Stack alignItems="center" direction="row" spacing={5}>
							<Avatar
								sx={{
									height: 55,
									width: 55,
								}}
							>
								<AllInboxIcon sx={{ height: 35, width: 35 }} />
							</Avatar>
							<Stack spacing={1}>
								<Typography color="text.secondary" variant="overline">
									Referencias totales
								</Typography>
								<Typography variant="h4">2</Typography>
							</Stack>
						</Stack>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<Stack alignItems="center" direction="row" spacing={5}>
							<Avatar
								sx={{
									background: '#D7F4E8',
									height: 55,
									width: 55,
								}}
							>
								<Icon name="dollar" height={35} width={35} />
							</Avatar>
							<Stack spacing={1}>
								<Typography color="text.secondary" variant="overline">
									Costo total del inventario
								</Typography>
								<Typography variant="h4">$200.000</Typography>
							</Stack>
						</Stack>
					</CardContent>
				</Card>
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
					<TextField sx={{ width: '100%' }} label="Categoría" select onChange={e => console.log(e.target.value)}>
						<MenuItem value={1} sx={{ backgroundColor: 'transparent !important' }}>
							Prueba
						</MenuItem>
						<MenuItem value={2} sx={{ backgroundColor: 'transparent !important' }}>
							Prueba
						</MenuItem>
						<MenuItem sx={{ backgroundColor: 'transparent !important' }}>Prueba</MenuItem>
					</TextField>
					<TextField sx={{ width: '100%' }} label="Ordenar por" select onChange={e => console.log(e.target.value)}>
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

export default Inventory;
