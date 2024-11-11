import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    const pokemonsInsertar: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segmentos = url.split('/');
      const no = +segmentos[segmentos.length - 2];

      pokemonsInsertar.push({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonsInsertar);

    return 'Seed Executed';
  }
}
