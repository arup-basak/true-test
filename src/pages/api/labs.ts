import type { NextApiRequest, NextApiResponse } from 'next'
import { LabProps } from '@/libs/interface';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<LabProps[]>
) {
    const dataArray: LabProps[] = [
        {
            labName: "Lab C",
            labLocation: "Location C"
        },
        {
            labName: "Lab D",
            labLocation: "Location D"
        },
        {
            labName: "Lab E",
            labLocation: "Location E"
        }
    ];
    res.status(200).json(dataArray)
}
