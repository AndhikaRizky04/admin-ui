import PropTypes from "prop-types";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
    yAxis: [
        {
            disableTicks: true,
            disableLine: true,
            tickFontSize: 10,
        },
    ],
    grid: {
        horizontal: true,
    },
    sx: {
        ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
            fill: "#9F9F9F",
        },
        ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
            fill: "#9F9F9F",
        },
    },
};

export default function BarsDataset(props) {
    const { desc } = props;

    return (
        <BarChart
            dataset={desc.data}
            xAxis={[
                {
                    scaleType: "band",
                    dataKey: desc.dataKey,
                    categoryGapRatio: 0.5,
                },
            ]}
            series={desc.series}
            slotProps={{
                legend: {
                    direction: "row",
                    position: { vertical: "top", horizontal: "right" },
                },
            }}
            {...chartSetting}
        />
    );
}

// Validasi properti menggunakan PropTypes
BarsDataset.propTypes = {
    desc: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.object).isRequired, // Data harus berupa array objek
        dataKey: PropTypes.string.isRequired,                // dataKey harus berupa string
        series: PropTypes.arrayOf(
            PropTypes.shape({
                dataKey: PropTypes.string.isRequired,         // dataKey pada series harus berupa string
                label: PropTypes.string,                     // Label pada series (opsional)
                fill: PropTypes.string,                      // Warna pada series (opsional)
            })
        ).isRequired, // Series harus berupa array objek dengan struktur di atas
    }).isRequired, // Properti `desc` wajib diisi
};
