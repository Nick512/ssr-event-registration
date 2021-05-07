import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Events {
	@PrimaryColumn()
	id: string;

	@Column()
	EventName: string;

	@Column()
	description: string;

	@Column()
	summary: string;

	@Column()
	eventURL: string;

	@Column()
	tickets: number;

	@Column()
	ticketsSold: number;

	@Column()
	ticketsForSale: boolean;

	@Column()
	cost: number;

	@Column()
	location: string;

	@Column()
	date: string;

	@Column()
	startTime: string;

	@Column()
	endTime: string;

	@Column()
	CreatedAt: string;

	@Column()
	expired: boolean;

	@Column()
	public: boolean;
}
