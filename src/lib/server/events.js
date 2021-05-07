var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, PrimaryColumn } from 'typeorm';
let Events = class Events {
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", String)
], Events.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "EventName", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "description", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "summary", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "eventURL", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Events.prototype, "tickets", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Events.prototype, "ticketsSold", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], Events.prototype, "ticketsForSale", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Events.prototype, "cost", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "location", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "date", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "startTime", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "endTime", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Events.prototype, "CreatedAt", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], Events.prototype, "expired", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], Events.prototype, "public", void 0);
Events = __decorate([
    Entity()
], Events);
export { Events };
//# sourceMappingURL=events.js.map