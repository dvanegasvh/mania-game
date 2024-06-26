import Image from 'next/image';
import { Box } from '@mui/material';
import { type IIconProps } from './models/IconProps';

import styles from './Icon.module.css';

export const Icon: React.FC<IIconProps> = ({ name = '', height = 25, width = 25 }) => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const src = require(`../../assets/svg/${name}.svg`).default;
	return (
		<Box
			sx={{
				height,
				width,
			}}
		>
			<Image src={src} alt={name} className={styles['image-size']} />
		</Box>
	);
};
