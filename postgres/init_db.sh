#!/bin/bash

psql -h localhost -p 5432 -U postgres -W -f sql_init.sql