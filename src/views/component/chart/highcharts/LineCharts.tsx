import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const HighChartBasicLine = (props : HighChartBasicLineProps) =>
{
	const options: Highcharts.Options = {
		title: {
			text: 'My chart'
		},
		series: [{
			type: 'line',
			data: [1, 2, 3]
		}]
	};

	return (
		<>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}>

			</HighchartsReact>
		</>
	);
}

export interface HighChartBasicLineProps
{
	children? : React.ReactNode,
}