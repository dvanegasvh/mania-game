import AssessmentIcon from '@mui/icons-material/Assessment';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Box, Button, TableCell, TableRow } from '@mui/material';
import { Main } from '@/components/main';
import { Table } from '@/components/table';
import { Tabs } from '@/components/tabs';
import { TitleSection } from '@/components/title-section';
import { useRedirect } from '@/hooks/useRedirect';
import { ROUTE_NAMES, SUB_ROUTES } from '@/models/Routes';
import { getTitleRoute } from '@/utils/routes';
import { CardInformation } from './components/card-information';
import { TABLE_HEADER } from './constants/TableMovements';

const Movements: React.FC = () => {
	const titlePage = getTitleRoute(ROUTE_NAMES.BALANCE);
	const { redirect } = useRedirect();
	return (
		<Main title={titlePage}>
			<TitleSection title={titlePage}>
				<Button
					variant="contained"
					startIcon={<ControlPointIcon />}
					onClick={(): void => {
						redirect(SUB_ROUTES.INCOME_CREATE);
					}}
				>
					Nueva venta
				</Button>
				<Button
					variant="outlined"
					sx={{
						borderWidth: 2.5,
						borderColor: 'primary.main',
						'&:hover': {
							borderWidth: 2.5,
							borderColor: 'primary.main',
						},
					}}
					startIcon={<AssessmentIcon />}
					onClick={(): void => {
						redirect(SUB_ROUTES.INCOME_REPORT);
					}}
				>
					Reporte de ingresos
				</Button>
			</TitleSection>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', lg: 'row' },
					width: '100%',
					justifyContent: 'space-between',
					columnGap: 12,
					rowGap: { xs: 4 },
				}}
			>
				<CardInformation icon="balance" name="Balance" value="$14.00" />
				<CardInformation icon="dollar" name="Venta totales" value="$14.00" />
			</Box>
			<Tabs titleTabs={['Ingresos']}>
				<Table headers={TABLE_HEADER}>
					<TableRow hover>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
					</TableRow>{' '}
					<TableRow hover>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
					</TableRow>{' '}
					<TableRow hover>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
					</TableRow>{' '}
					<TableRow hover>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
						<TableCell>Prueba</TableCell>
					</TableRow>
				</Table>
			</Tabs>
		</Main>
	);
};

export default Movements;
