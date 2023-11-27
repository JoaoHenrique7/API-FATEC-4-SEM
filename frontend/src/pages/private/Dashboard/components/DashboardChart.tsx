import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle } from 'recharts';
import styles from "./Dashboard.module.css";
import RegistryService from "../../../../services/RegistryService/RegistryService";

interface Registry {
    id: number;
    saldo: number;
    volumeOleoUsado: number;
    volumeOleoVirgem: number;
    idUsuario: number;
    createdAt: string;
    updatedAt: string;
}

const getAllRegistry = async () => {
    try {
        const resultadoRequest: any[] = (await RegistryService.getAllRegistry())
            .data;
        return resultadoRequest
        } catch (error) {
        console.log("Aqui");
    } 
};

class DashboardChart extends Component<object> {

    AmountUsedAndVirginOil = async () => {
        const resultadoRequest = getAllRegistry()

        const data: {
            "Volume óleo usado": number;
            "Volume óleo virgem": number;
            "Data": string;
        }[] = [];

        resultadoRequest.forEach(async (element) => {
            const registry = {
                "Volume óleo usado": element.volumeOleoUsado,
                "Volume óleo virgem": element.volumeOleoVirgem,
                "Data": element.updatedAt
            };
            data.push(registry);
        })
        return (
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        );
    };

    QuotationVirginAndUsedOil = () => {
        const data = [
            {
                name: 'Page A',
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: 'Page B',
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: 'Page C',
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: 'Page D',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: 'Page E',
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
            {
                name: 'Page F',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: 'Page G',
                uv: 3490,
                pv: 4300,
                amt: 2100,
            },
        ];
        return (
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        );
    };

    UserAmount = () => {
        const data01 = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 },
            { name: 'Group E', value: 278 },
            { name: 'Group F', value: 189 },
        ];

        const data02 = [
            { name: 'Group A', value: 2400 },
            { name: 'Group B', value: 4567 },
            { name: 'Group C', value: 1398 },
            { name: 'Group D', value: 9800 },
            { name: 'Group E', value: 3908 },
            { name: 'Group F', value: 4800 },
        ];

        return (
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="35%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
            </PieChart>
        );
    };

    VolumeOfVirginAndUsedOil = () => {
        const data = [
            {
                name: 'Page A',
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: 'Page B',
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: 'Page C',
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: 'Page D',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: 'Page E',
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
            {
                name: 'Page F',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: 'Page G',
                uv: 3490,
                pv: 4300,
                amt: 2100,
            },
        ];

        return (

            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>

        );
    }

    async getAllRegistry(): Promise<void> {
        const resultadoRequest: Registry[] = (await RegistryService.getAllRegistry()).data;
        const list: { Saldo: number; volumeOleoUsado: number; volumeOleoVirgem: number }[] = [];
        resultadoRequest.forEach((element) => {
            const registry = {
                Saldo: element.saldo,
                volumeOleoUsado: element.volumeOleoUsado,
                volumeOleoVirgem: element.volumeOleoUsado,
            };

            console.log(registry)
            list.push(registry);
        });
        // this.setState({ table: { data: list, isLoading: false } });
    }

    componentDidMount(): void {
        this.getAllRegistry();
    }

    // const { table } = this.state;

    render() {
        // const { table } = this.state;

        return (
            <section className={styles["page"]}>
                <div className={styles["amout_used_and_virgin_oil_chart"]}>
                    <p>Quantidade de óleo virgem e usado</p>
                    <this.AmountUsedAndVirginOil />
                </div>
                <div className={styles["quotation_virgin_and_used_oil_chart"]}>
                    <p>Cotação do óleo virgem e usado</p>
                    <this.QuotationVirginAndUsedOil />
                </div>
                <div className={styles["user_amount_chart"]}>
                    <p>Quantidade de usuários</p>
                    <div className={styles["chart"]}>
                        <this.UserAmount />
                    </div>
                </div>
                <div className={styles["volume_of_virgin_and_used_oil_chart"]}>
                    <p>Volume de óleo virgem e usado dos usuários</p>
                    <div className={styles["chart"]}>
                        <this.VolumeOfVirginAndUsedOil />
                    </div>

                </div>
            </section>
        );
    }

}

export default DashboardChart;