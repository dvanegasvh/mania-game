import AllInboxIcon from '@mui/icons-material/AllInbox';
import CategoryIcon from '@mui/icons-material/Category';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Box, Button, InputAdornment, MenuItem, OutlinedInput, Stack, TableCell, TableRow, TextField } from '@mui/material';
import { CardInformation } from '@/components/card-information';
import { Main } from '@/components/main';
import { Table } from '@/components/table';
import { TitleSection } from '@/components/title-section';
import { SUB_ROUTES_NAMES } from '@/models/Routes';
import { getSubRouteTitle } from '@/utils/routes';
import { TABLE_HEADER } from './constants/TableCategories';

export const Categories: React.FC = () => {
	const titlePage = getSubRouteTitle(SUB_ROUTES_NAMES.CATEGORIES);
	return (
		<Main title={titlePage}>
			<TitleSection title={titlePage}>
				<Button variant="contained" startIcon={<ControlPointIcon />}>
					Nueva categoría
				</Button>
			</TitleSection>
			<Box>
				<Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 2, lg: 10 }}>
					<CardInformation
						icon={<CategoryIcon sx={{ height: 35, width: 35, color: '#2DA674' }} />}
						value="20"
						name="Categorías totales"
					/>
					<CardInformation
						icon={<AllInboxIcon sx={{ height: 35, width: 35 }} />}
						value="10"
						name="Categorías usadas"
						background="#BDBDBD"
					/>
				</Stack>
				<Box marginTop={5}>
					<Stack
						marginBottom={4}
						direction={{ lg: 'row', xs: 'column' }}
						justifyContent="space-between"
						spacing={{ xs: 2 }}
					>
						<OutlinedInput
							sx={{ width: { lg: 400, xs: '100%' } }}
							placeholder="Buscar categoría"
							startAdornment={
								<InputAdornment position="start">
									<SearchSharpIcon />
								</InputAdornment>
							}
						/>
						<TextField
							sx={{ width: { lg: 400, xs: '100%' } }}
							label="Ordenar por"
							select
							onChange={e => console.log(e.target.value)}
						>
							<MenuItem value={1} sx={{ backgroundColor: 'transparent !important' }}>
								Prueba
							</MenuItem>
							<MenuItem value={2} sx={{ backgroundColor: 'transparent !important' }}>
								Prueba
							</MenuItem>
							<MenuItem sx={{ backgroundColor: 'transparent !important' }}>Prueba</MenuItem>
						</TextField>
					</Stack>
					<Table headers={TABLE_HEADER}>
						<TableRow hover>
							<TableCell>Prueba</TableCell>
							<TableCell>Prueba</TableCell>
							<TableCell sx={{ display: 'flex', gap: 1 }}>
								<EditIcon
									sx={{
										cursor: 'pointer',
										color: 'neutral.500',
										'&:hover': {
											color: 'primary.main',
										},
									}}
								/>
								<DeleteIcon
									sx={{
										cursor: 'pointer',
										color: 'neutral.500',
										'&:hover': {
											color: 'primary.main',
										},
										transition: 'all .3s',
									}}
								/>
							</TableCell>
						</TableRow>
						<TableRow hover>
							<TableCell>Prueba</TableCell>
							<TableCell>Prueba</TableCell>
							<TableCell sx={{ display: 'flex', gap: 1 }}>
								<EditIcon
									sx={{
										cursor: 'pointer',
										color: 'neutral.500',
										'&:hover': {
											color: 'primary.main',
										},
									}}
								/>
								<DeleteIcon
									sx={{
										cursor: 'pointer',
										color: 'neutral.500',
										'&:hover': {
											color: 'primary.main',
										},
										transition: 'all .3s',
									}}
								/>
							</TableCell>
						</TableRow>
						<TableRow hover>
							<TableCell>Prueba</TableCell>
							<TableCell>Prueba</TableCell>
							<TableCell sx={{ display: 'flex', gap: 1 }}>
								<EditIcon
									sx={{
										cursor: 'pointer',
										color: 'neutral.500',
										'&:hover': {
											color: 'primary.main',
										},
									}}
								/>
								<DeleteIcon
									sx={{
										cursor: 'pointer',
										color: 'neutral.500',
										'&:hover': {
											color: 'primary.main',
										},
										transition: 'all .3s',
									}}
								/>
							</TableCell>
						</TableRow>
					</Table>
				</Box>
			</Box>
		</Main>
	);
};

export default Categories;
