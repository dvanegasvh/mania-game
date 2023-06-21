import { Box, Card, Table as MuiTable, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Scrollbar } from '@/styles/scrollbar/Scrollbar';
import { ITableProps } from './models/TableProps';

export const Table: React.FC<ITableProps> = ({ headers = [], children }) => {
	return (
		<Card
			sx={{
				borderRadius: 1.5,
			}}
		>
			<Scrollbar sx={{ height: 'fit-content' }}>
				<Box sx={{ minWidth: 800 }}>
					<MuiTable>
						<TableHead>
							<TableRow>
								{headers.map(({ title, colSpan, rowSpan, sx }, index) => (
									<TableCell key={`${title}-${index}`} colSpan={colSpan} rowSpan={rowSpan} sx={sx}>
										{title}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>{children}</TableBody>
					</MuiTable>
				</Box>
			</Scrollbar>
		</Card>
	);
};
